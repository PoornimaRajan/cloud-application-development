from pyhive import hive
from flask import Flask, render_template
app = Flask(__name__)
def hiveconnection():
    conn = hive.Connection(host="localhost", port=10000, username="", password="",
                           database="clouddb", auth='CUSTOM')
    cur = conn.cursor()
    cur.execute('select * from phonetable')
    Dict = cur.fetchall()
    return str(Dict)
	
def hiveconnection1(PhoneId):
    conn = hive.Connection(host="localhost", port=10000, username="", password="",
                           database="clouddb", auth='CUSTOM')
    cur = conn.cursor()
    cur.execute('select * from specstable where phoneid='+PhoneId+';')
    Dict = cur.fetchall()
    return str(Dict)
    
def hiveconnection2():
    conn = hive.Connection(host="localhost", port=10000, username="", password="",
                           database="clouddb", auth='CUSTOM')
    cur = conn.cursor()
    cur.execute('select * from topreviewstable')
    Dict = cur.fetchall()
    return str(Dict)
def hiveconnection3(PhoneId):
    conn = hive.Connection(host="localhost", port=10000, username="", password="",
                           database="clouddb", auth='CUSTOM')
    cur = conn.cursor()
    cur.execute('select * from specstable where phoneid='+PhoneId+';')
    Dict = cur.fetchall()
    return str(Dict)
	
@app.route("/getAllPhoneBrand")
def main():
    output = hiveconnection()
    return output
	
@app.route("/getPhoneSpecs/<phoneId>", methods=['GET'])
def main1(phoneId): 
    output1=hiveconnection1(phoneId)  
    return output1
	
@app.route("/getPhoneReview")
def main2():
    output2=hiveconnection2()  
    return output2
	
@app.route("/getPhonepolarity/<phoneId>", methods=['GET'])
def main3(phoneId): 
    output3=hiveconnection3(phoneId)  
    return output3
   
   

if __name__ == "__main__":
    app.run(debug=1,port=7000,host='0.0.0.0')