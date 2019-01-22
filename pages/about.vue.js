var spaabout = Vue.extend({
  template: `<div>

  <main>
        <section class="section page-title-section theme-after bg-fixed bg-center-center bg-cover" style="background-image: url(static/img/ol.jpg);">
            <div class="container">
                <div class="page-title text-center">
                    <h1>About Tenebris</h1>
                </div>
                <ol class="breadcrumb justify-content-center">
                    <li><a href="/">Home</a></li>
                    <li class="active">About</li>
                </ol>
            </div>
        </section>
        <section class="section bg aboutus-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="feature-box-02">
                            <label class="theme2nd-color">What We Do</label>
                            <h3 class="m-20px-b font-alt">Deliver Innovation As A Brand</h3>
                            <p class="m-25px-b">We are design thinking advocates and scaled agile experts. We build intuitive and empathic user experiences that leverage multimodal technologies including IoT, mobile, web, and cloud solutions.</p>
                            <p class="m-25px-b">We partner with our clients to build and implement innovative, cost-effective enterprise solutions that enable them to perform better, get to market faster, create stronger relationships with their customers, and differentiate for success.</p>
                            <p class="m-25px-b">What sets us apart is a genuine understanding of your users. Our team cuts through the clutter to create and measure impactful strategies. We ensure your digital campaigns align with your business objectives, and leverage opportunities for innovation and differentiation.</p><a href="mailto:hi@tenebris.co?Subject=Hello" class="m-btn m-btn-theme2nd" s-="">Learn More</a> </div>
                    </div>
                    <div class="col-md-6">
                        <div class="video-box md-m-30px-t"> <img src="static/img/br.jpg" title="" alt=""> </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="video-box"> <img src="static/img/bg.jpg" alt="" title=""> </div>
        </section>
        <section class="p-50px-tb tech-section">
            <div class="container">
                <div class="row justify-content-center m-45px-b md-m-25px-b">
                    <div class="col-md-10 col-lg-8">
                        <div class="section-title">
                            <h2 class="theme-after-bg">Technology we use</h2>
                            <p>We invest in keeping you abreast of new technologies. We help companies leverage Cloud, and other disruptive technologies to transform their business.</p>
                        </div>
                    </div>
                </div>
                <div class="tech-row">
                    <div class="row">
                        <div class="col-6 col-md-3 col-sm-6 m-15px-tb">
                            <div class="tech-col"> <span class="icon-angular"> <span class="path1"></span><span class="path2"></span><span class="path3"></span> </span>
                                <h6>ANGULAR</h6>
                            </div>
                        </div>
                        <div class="col-6 col-md-3 col-sm-6 m-15px-tb">
                            <div class="tech-col"> <span class="icon-node"> </span>
                                <h6>NODEJS</h6>
                            </div>
                        </div>
                        <div class="col-6 col-md-3 col-sm-6 m-15px-tb">
                            <div class="tech-col"> <span class="icon-aws">
                        <span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
                                <h6>AWS</h6>
                            </div>
                        </div>
                        <div class="col-6 col-md-3 col-sm-6 m-15px-tb">
                            <div class="tech-col"> <span class="icon-azure"></span>
                                <h6>AZURE</h6>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6 col-md-3 col-sm-6 m-15px-tb">
                            <div class="tech-col"><span class="icon-blockchain"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>
                                <h6>BLOCKCHAIN</h6>
                            </div>
                        </div>
                        <div class="col-6 col-md-3 col-sm-6 m-15px-tb">
                            <div class="tech-col"> <span class="icon-graphql"></span>
                                <h6>GRAPHQL</h6>
                            </div>
                        </div>
                        <div class="col-6 col-md-3 col-sm-6 m-15px-tb">
                            <div class="tech-col"> <span class="icon-bluemix"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>
                                <h6>BLUEMIX</h6>
                            </div>
                        </div>
                        <div class="col-6 col-md-3 col-sm-6 m-15px-tb">
                            <div class="tech-col">
                                <span class="icon-docker">
                        <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span>
                                </span>

                                <h6>DOCKER</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section bg">
            <div class="container">
                <div class="row justify-content-center m-45px-b md-m-25px-b">
                    <div class="col-md-10 col-lg-8">
                        <div class="section-title">
                            <h2 class="theme-after-bg">Our Process</h2>
                            <p>We take the time to understand your vision, help define your product, and then design and build it. We are transparent throughout our process.</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="faq-box" id="accordion">
                            <div class="faq-row">
                                <div class="faq-header" id="faqa-1">
                                    <h5 class="faq-title collapsed" data-toggle="collapse" data-target="#faqc-1" data-aria-expanded="true" data-aria-controls="faqc-1" aria-expanded="false"> <span class="no theme-g-bg">1</span>Meetup </div>
                                <div id="faqc-1" class="collapse" aria-labelledby="faqa-1" data-parent="#accordion" style="">
                                    <div class="faq-body">
                                        <p>Let us catch up over a coffee or skype and discuss about your vision and the problem you want to solve.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="faq-row">
                                <div class="faq-header" id="faqa-2">
                                    <h5 class="faq-title" data-toggle="collapse" data-target="#faqc-2" data-aria-expanded="true" data-aria-controls="faqc-2"> <span class="no theme-g-bg">2</span>Storyboarding </h5>
                                </div>
                                <div id="faqc-2" class="collapse" aria-labelledby="faqa-2" data-parent="#accordion">
                                    <div class="faq-body">
                                        <p>Post meeting, form user stories that clearly define the scope of the project. We put your requirements down on a project management tool like trello in the form of user stories. This clearly defines the scope of projects and ensure both parties know what we are getting into. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="faq-row">
                                <div class="faq-header" id="faqa-3">
                                    <h5 class="faq-title" data-toggle="collapse" data-target="#faqc-3" data-aria-expanded="true" data-aria-controls="faqc-3"> <span class="no theme-g-bg">3</span> Sprints </h5>
                                </div>
                                <div id="faqc-3" class="collapse" aria-labelledby="faqa-3" data-parent="#accordion">
                                    <div class="faq-body">
                                        <p>We break our product development cycle into many sprints that are about 2 weeks each. Each sprint has a monday morning sprint planning meeting and daily ten minute stand ups. At the second friday we have a sprint conclusion demo and a retrospective. </p>
                                    </div>
                                </div>
                            </div>
                            <div class="faq-row">
                                <div class="faq-header" id="faqa-4">
                                    <h5 class="faq-title" data-toggle="collapse" data-target="#faqc-4" data-aria-expanded="true" data-aria-controls="faqc-4"> <span class="no theme-g-bg">4</span>Feedback </h5>
                                </div>
                                <div id="faqc-4" class="collapse" aria-labelledby="faqa-4" data-parent="#accordion">
                                    <div class="faq-body">
                                        <p>We set up a staging server where our continuous delivery manager will automatically deploy the latest code we push. You can check the status of your project anytime on our staging server and provide us feedback.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="faq-row">
                                <div class="faq-header" id="faqa-5">
                                    <h5 class="faq-title" data-toggle="collapse" data-target="#faqc-5" data-aria-expanded="true" data-aria-controls="faqc-5"> <span class="no theme-g-bg">5</span> Acceptance </h5>
                                </div>
                                <div id="faqc-5" class="collapse" aria-labelledby="faqa-5" data-parent="#accordion">
                                    <div class="faq-body">
                                        <p>Once we deliver a user story, you can test it out on staging server and accept the story or give us feedback if any.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="faq-row">
                                <div class="faq-header" id="faqa-6">
                                    <h5 class="faq-title" data-toggle="collapse" data-target="#faqc-6" data-aria-expanded="true" data-aria-controls="faqc-6"> <span class="no theme-g-bg">6</span> Completion </h5>
                                </div>
                                <div id="faqc-6" class="collapse" aria-labelledby="faqa-6" data-parent="#accordion">
                                    <div class="faq-body">
                                        <p>Once all the stories have been accepted by you, we prepare the project for delivery and give you a documentation of our work.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="video-box md-m-30px-t"> <img src="static/img/ol.jpg" title="" alt=""> </div>
                    </div>
                </div>

            </div>
        </section>

        <section id="freetrial" class="section try-action">
            <div class="container">
                <div class="row justify-content-center m-45px-b md-m-25px-b">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="section-title text-center">
                            <h2 class="theme-after-bg">Ready to try?</h2>
                            <p>Schedule a free consultation with our software engineers to discuss your native cloud application or enterprise needs.</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-7 text-center">
                        <form  v-on:click="mc" id="mc-form" class="subscribe-box">
                            <input id="mc-email" placeholder="Enter Email" class="form-control" type="email" name="Start Now">
                            <button class="m-btn m-btn-theme2nd">Get Start Now</button> <small class="text-warning">We'll use this email to get back to you.</small> </form>
                    </div>
                </div>
            </div>
        </section>
    </main>


   </div>`,
  
  head: {title: {inner: 'About Tenebris'}},

  methods: {

    mc:function (event) {
      

    $('#mc-form').ajaxChimp({
        callback: callbackFunction,
        url: 'https://sprive.us8.list-manage.com/subscribe/post?u=f03eab3dc1f50f2bd3abc03f8&am' +
                'p;id=bb3628b8aa'
    });

    function callbackFunction(resp) {
        if (resp.result === 'success') {
            swal("Good job!", resp.msg, "success")
        } else if (resp.result === 'error') {
            swal("Error!", resp.msg, "error")
        }
    }


    }

  }
});
