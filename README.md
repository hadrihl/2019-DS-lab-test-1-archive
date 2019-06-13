2019 TSNP303/03 Distributed Systems - Lab Test 1 
================================================
This lab test is part of the coding exercise during Distributed Systems class. Students are required to develop a simple user-invoke-servers architecture, written with NodeJS and Socket.IO. 

Some dependencies may be resolved in order to run the programs. 

```code
$ npm install --save <package>
```


Steps taken to perform QC:
--------------------------
1. Run server-1. 

2. Run client. client sents message to server-1. Server-1 sents message to server-2. 

3. server-2 receives message from server-1 upon successful connection. Server-2 sents message to server-1 and server-1 forward the message back to client. 


Respective Authors:
-------------------
* Ooi Aun Chuan (AC) // aunchuan88@gmail.com
* Lee Zhen Yu // leezhenyu80@gmail.com
* TB-add


QC Test:
--------
* hadrihl // mdnorhadrih@wou.edu.my


&copy; 2019. Wawasan Open University


