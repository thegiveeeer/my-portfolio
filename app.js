       
const navVm = new Vue({
    el: '#nav',
    data:{
        hide:'',
        navItems: {
            "#up":"Home",
            "#about-me":"About",
            "#services":"Services",
            "#my-skills":"My Skills",
            "#projects":"Projects",
            "#contact":"Contact Me"
        }
    },
    methods:{
        toggleNav: function(){
            this.hide ? this.hide = '' : this.hide = 'show-nav'
        }
    }
})

const projectVm = new Vue({
    el: '#projects',
    data:{
        
        projects: {
            "budget app":"http://mebudget.herokuapp.com/",
            "todo app":"https://todoapp-withvuejs.netlify.app/",
            "randomising app":"https://randup.netlify.app/",
            "weather app":"https://weatherw.netlify.app/"
        }
    }
})

const socialVm = new Vue({
    el: '#social',
    data:{      
        socials: {
            'github':'https://github.com/emmyoks',
            'twitter':'https://twitter.com/Meetemmyoks',
            'linkedin':'https://www.linkedin.com/in/emmanuel-obasanmi-6a14351b1'

        }
    }
})
const contactvm = new Vue({
    el: '#contact',
    data:{
        
        form: {
            'name':'',
            'email':'',
            'message':''
        },
        socials: {
            'github':'https://github.com/emmyoks',
            'twitter':'https://twitter.com/Meetemmyoks',
            'linkedin':'https://www.linkedin.com/in/emmanuel-obasanmi-6a14351b1'

        },
        submit: true,
        flyPlane:'',
        visName:''
    },
    methods:{
        sendForm:function(){
            if(this.submit){
                this.visName = this.form.name;
                this.flyPlane='fly';
                this.submit = false;
                const el = document.createElement('div')
                el.innerHTML = "An error occured, you can reach us through <a href='mailto:emmanuelObasanmi@gmail.com?'>Gmail</a>, <a href='https://github.com/emmyoks'>GitHub</a>, <a href='https://twitter.com/Meetemmyoks'>Twitter</a> and <a href='https://www.linkedin.com/in/emmanuel-obasanmi-6a14351b1'>Linkedin</a>."
            
                emailjs.sendForm('service_a8es2ij', 'Port_web1', '#vis-form')
                .then((response) => {
                    
                    swal({
                        title: "",
                        text: "Hello "+this.form.name+". Thanks for reaching out, I'll get back to you as soon as possible.",
                        icon: "success",
                        });

                    this.form.name = '';
                    this.form.email = '';
                    this.form.message = '';
                    this.flyPlane='';
                },
                (error) => {
                    console.log(error)
                    swal({             
                        title: "",
                        content: el,
                        icon: "error",
                        html: true
                    });
                    this.submit = true;
                    this.flyPlane='';
                })
            }else{
                swal({             
                    title: "",
                    text: "Hello again "+this.visName+", the message you sent earlier has been delivered, Kindly wait for a reply from me or refresh page to try again if important.",
                    icon: "error"
                });
                
            }
        }
    }
})


AOS.init({
    easing: 'ease-in-out-sine'
    }); 