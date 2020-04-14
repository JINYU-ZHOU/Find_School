# University-WeiXin
连接后台需要统一一下appid：wxa1b202ae01b354d3
后台接口信息：
后台接口域名：https://spergol


**用户登录与注册：/login
必传参数：code（用户登录产生的res.code），username（用户名），identify（身份，1学生，2老师）,classes(院系)
可选参数：password(授权码，固定123456，老师注册必传)
返回值：用户信息字符串及提示


**用户信息修改：/changeUser
可选参数：username(用户名) identify(身份信息，慎传) classes(院系)
返回值：1成功，0失败


**教师创建学生注册流程信息：/add
必传参数：text（流程介绍），localname（地点名称），latitude（纬度），longitude（精度）
返回值：1成功，0失败，-1无权限

**教师修改学生注册流程信息：/changeProcedures
必传参数：id（获取要修改的流程id号）
可选参数：text,localname,latitude,longitude
返回值：1成功，0失败


**教师删除学生注册流程信息：/delete
必传参数：id
返回值：1成功，0失败


**学生读取注册流程信息：/main
返回值：查询到的流程信息list


**地图添加地点：/addMaps
必传信息：name,latitude,longitude
返回值：null


**地点热词查询：/selMaps
必传参数：words
返回值：确定地点


**热词模糊查询：/selWords
必传参数：name
返回值：模糊查询热词list


**热词增加热度：/hot
必传参数：name
返回值：null

**按热度排序：/selhot
必传参数：null
返回值：热度排序list
