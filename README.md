## This is a demo of authentication and authorization using JWT token. 
**1.Admin role:** - <br>
**userid:- sam@gmail.com    password:- sam@123** <br>
**2.Manager role:** - <br>
**userid:- muk@gmail.com    password:- muk@123**<br>
**3.Employee role:** - <br>
**userid:- sau@gmail.com    password:- sau@123** <br>

##
## ScreenShots:
1. Generation of Token (authentication)
![image](https://github.com/user-attachments/assets/a799f283-cb71-4e03-9e41-6db8a6e8c4a3)

2. providing access to application (authorization)
![{0A153A7E-94DB-4135-AC62-C2E8A71115E6}](https://github.com/user-attachments/assets/e012aa2f-ee99-41ea-8020-23cbe105884d)

3.Restricting acess on basis of role (authorization)
![{D4BC3DCC-7EF6-4257-979D-50769F10F38A}](https://github.com/user-attachments/assets/0b9d08fc-db1a-4dee-8688-5c2cbeaafc53)


## Code snippet of auth - controller
![{7C395BFF-1F12-490F-A119-BD3EC038DF5F}](https://github.com/user-attachments/assets/b4c297ba-49b8-4b8a-950b-4378684b815c)


## API snippet 

1.  code snippet for handling the tokens (sign and verify)
![{C9E6D2D3-B9A7-4082-91A3-92EEE2C364C5}](https://github.com/user-attachments/assets/7ff65cd8-1daf-4ad3-b6ff-6adc6e065576)

2. code snippet of controller (that performs the db query)
![{EDA14DDF-5CE1-4533-94EE-CE1E16ACE009}](https://github.com/user-attachments/assets/5ea4cd62-541a-47c9-9614-566b76b9edee)

3. code snippet of API that used the token for verifications and generation of token
![{51898D90-CFE5-4272-9ACC-90480E18D237}](https://github.com/user-attachments/assets/634923c3-c8d3-42f5-8091-717b62269879)
![{D9721565-43FF-4045-A339-FA75354CE6F2}](https://github.com/user-attachments/assets/4164ce53-bc39-46c4-9707-5778c5a621dc)


## Deployment 
# 1. database deployemnt: used postgres hosted in supabase
   ![{C250EDB2-B26B-4AA9-9880-D89BEBED066C}](https://github.com/user-attachments/assets/2d17cab0-4765-4f78-b313-0b29caa767aa)
   ![{D4A98ED4-F215-45D1-B37E-C61771D75A22}](https://github.com/user-attachments/assets/26a7ee17-3beb-4c6a-9b25-75e3f7f8200a)

# 2. Web service deployment : used nodejs hosted in render
  ![{6FB09678-86BA-4EBB-8806-CAC3D5B26B1E}](https://github.com/user-attachments/assets/19845d09-da37-4e9f-b403-565add8d956d)
  ![{FF3383F7-C1DB-47BB-99DE-FCFE22943AC9}](https://github.com/user-attachments/assets/c303c453-7594-49e6-95b2-d77018529123)







