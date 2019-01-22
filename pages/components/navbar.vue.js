Vue.component("navbar-template", {
  template: `<div>
    <header>
        <nav class="navbar header-nav fixed-top navbar-expand-lg header-nav-light">
            <div class="container-fluid">
                <a class="navbar-brand" s-> <img src="static/img/logo.svg" style="width:30px"> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span></span> <span></span> <span></span> </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbar">
                    <ul class="navbar-nav ml-auto">
                        <li><router-link to="/" class="nav-link">Home</router-link></li>
                        <li><router-link to="/#solution" class="nav-link">Solution</router-link></li>
                        <li><router-link to="/#services" class="nav-link">Services</router-link></li>
                        <li><router-link to="/#price" class="nav-link">Price</router-link></li>
                        <li><router-link to="#freetrial" class="nav-link">Free Trial</router-link></li>
                        <li><router-link to="/about" class="nav-link">About</router-link></li>
                        <li><a href="https://beam7.typeform.com/to/FPVXP1" class="nav-btn nav-link">Sign Up</a></li>

                    </ul>
                </div
            </div>
        </nav>
    </header>
</div>`,

  data() {
    return {
      menu: false,
      items: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Sign Up", path: "/form" }
      ]
    }
  },
  mounted() { 
  

  },
  methods: {}
})
