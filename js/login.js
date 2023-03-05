var code="";
var account="";
var pw="";


/*随机生成验证码*/
function randomCode() {
  code=Math.floor(Math.random()*(9000)+1000);
  alert("你的验证码是: "+code);
}

function check(name,pw,codeInput) {
  if(name==''||pw==''){
    alert("账号密码不能为空");
    return false;
  }
  else if(code!=codeInput||code==''){
    alert("验证码输入错误");
    return false;
  }
  return true;
}

/*登录函数*/
function login() {
  var form=document.forms['loginForm'];
  var name=form.elements['name'].value;
  var pwInput=form.elements['pw'].value;
  var phone=form.elements['phone'].value;
  var codeInput=form.elements['code'].value;

  if(check(name,pwInput,codeInput)){
    if(name==account){
      if(pwInput==pw){
        alert("登录成功");
        window.location.href="index.html";
      }
      else{
        alert("密码错误");
      }
    }
    else {
      alert("账号不存在");
    }
    }
}

/*注册函数*/
function register() {
  var form=document.forms['loginForm'];
  var name=form.elements['name'].value;
  var pwInput=form.elements['pw'].value;
  var phone=form.elements['phone'].value;
  var codeInput=form.elements['code'].value;

  if(check(name,pwInput,codeInput)) {
    account=name;
    pw=pwInput;
    alert("注册成功!");
  }
}