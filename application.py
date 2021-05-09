from cs50 import SQL
from flask import Flask, flash, jsonify, redirect, render_template, request, session
import requests
from datetime import datetime

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///regions.db")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/map", methods=["GET", "POST"])
def showmap():
    return render_template("map.html")

@app.route("/prevention")
def prevent():
    return render_template("prevent.html")

@app.route("/about")
def about():
    version = requests.get("https://api.opencovid.ca/version")

    versionData = version.json()
    versionData = versionData["version"]
    versionTime = versionData[:-4]
    versionTime = datetime.strptime(versionTime, "%Y-%m-%d %H:%M")


    now = datetime.now()
    now = now.strftime("%Y-%m-%d %H:%M")
    nowTime = datetime.strptime(now, "%Y-%m-%d %H:%M")

    difference = nowTime - versionTime

    if difference.days == 1:
        difference = f"{difference.days} day and {difference.seconds//3600}:{(difference.seconds//60)%60} (HH:MM)"
    else:
        difference = f"{difference.days} days and {difference.seconds//3600}:{(difference.seconds//60)%60} (HH:MM)"

    return render_template("about.html", versionData=versionData, difference=difference)

@app.route("/region")
def region():
    location = request.args.get("q")
    tabledata = db.execute("SELECT region FROM regions WHERE provcode LIKE ?", "%" + location + "%")
    province = db.execute("SELECT province FROM regions  WHERE provcode LIKE ? GROUP BY provcode", "%" + request.args.get("q") + "%")
    return render_template("region.html", tabledata=tabledata, province=province[0]["province"])

@app.route("/stats", methods=["GET", "POST"])
def stats():
    if request.method == "POST":
        region = request.form.get("regionSelect")

        if region == None:
            return render_template("region.html")

        region = region.replace("+", " ")
        regionCode = db.execute("SELECT code FROM regions WHERE region LIKE ?", "%" + region + "%")
        regionCode = regionCode[0]["code"]


        url = "https://api.opencovid.ca/summary?loc=" + str(regionCode)
        covidUrl = requests.get(url)
        covidStats = covidUrl.json()

        return render_template("stats.html", region=region, covidStats=covidStats["summary"])
    else:
        return render_template("map.html")
