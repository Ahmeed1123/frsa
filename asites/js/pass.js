function passForget(inputPassclass , iconClass){
    // اختيار العنصر
    let passwordInput = $(inputPassclass);
    let toggleButton = $(iconClass);

    // تغيير نوع حقل كلمة المرور والأيقونة
    
      let type = passwordInput.attr("type");
      if (type === "password") {
        passwordInput.attr("type", "text");
        toggleButton.html('<i class="fa fa-eye-slash"></i>'); // أيقونة العين المشطوفة
      } else {
        passwordInput.attr("type", "password");
        toggleButton.html('<i class="fa fa-eye"></i>'); // أيقونة العين
      }
  };