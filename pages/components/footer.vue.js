Vue.component("footer-template", {
  template: `<div>
    <footer class="footer footer-light">
        <section class="footer-section">

        <div class="container-fluid">

            <div class="row p-20px-t">
                <div class="col-4 float-left">
                      <ul class="social-icons">
                      <li><a href="https://t.me/tenebrisbg" target="_blank"><i class="fab fa-telegram-plane"></i></a></li>
                      <li><a href="https://www.linkedin.com/company/tenebris-llc/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                      </ul>                  
                </div>
                <div class="col-4 text-center"><a class=""> <img src="static/img/logo.svg" style="padding-bottom:10px;width:30px"> </a></div>
            
            <div class="col-4">
              <ul class="social-icons float-right">
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
              <li><a href="https://beam7.typeform.com/to/FPVXP1" target="_blank"><i class="fab fa-slack"></i></a></li>
              </ul>    
            </div>

            </div>
         </div>

        <div class="container">
            <div class="footer-copy">
                <div class="row row justify-content-center">
                    <div class="col-md-6 col-sm-12 ">
                        <p>©<span id="ud"></span> Tenebris LLC. All Rights Reserved. We use cookies to provide the best experience. By continuing to use our website, you agree to our Cookies and Privacy Policy.</p>
                    </div>
                </div>
            </div>
        </div>

        </section>
    </footer>
</div>`,
  mounted() { 
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById("ud").innerHTML = new Date().getFullYear();
    }); 
  }
})
