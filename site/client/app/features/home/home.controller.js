import $ from 'jquery';
/**
 * an ES6 class is normally assigned
 */
export default class HomeController {

  /**
   * Static getter, that returns the unique identifier of the class. Used for registration with modules.
   */
  static get UID(){
    return "HomeController"
  }

  data: string;

  down(){
    $.fn.fullpage.moveSectionDown();
  }

  up(){
    $.fn.fullpage.moveSectionUp();
  }

  /* @ngInject */
  constructor() {
    this.contact = {
      id: "contact",
      title: "Contact Us",
      content: "<p>this is the content</p>"
    };
    $('#logo').hide();
    // Properties of the class are defined in the constructor with
    this.options = {
        //anchors: ['RCM', 'Secure', 'Platforms', 'Service', 'Service', 'Spread', 'Precious', 'Forex', 'Promotion'],
        menu: '#menu',
        css3: true,
        scrollingSpeed: 750,
        easing: 'easeOutBack',
        //easingcss3: 'cubic-bezier(0.790, -0.225, 0.130, 1.335)',
        onLeave: function(index, newIndex, direction){
          //console.log(index, newIndex, direction);
          $('#up').hide();
          $('#down').hide();

          TweenLite.to($('#section'+index).find('.move-up'), 0, {
            marginTop: "30%"
          });
          TweenLite.to($('#section'+index).find('.move-down'), 0, {
            marginTop: "-30%"
          });

          TweenLite.to($('#image'+newIndex), 1.5, {
            marginTop: "0",
            onComplete: function(){

            }
          });

				},
        afterLoad: function(anchorLink, index){
          //console.log("afterLoad " + index + " - " + anchorLink);



          switch (index) {
            case 1:
              TweenLite.to($('#logo-small'), 0.7, {
                className:"big",
                marginTop: "21.2%",
                display: "none",
                onComplete: function(){
                  $('#logo').show();
                  TweenLite.to($('#logo-small'), 0, {
                    className:"small",
                    display: 'block',
                    top:"-80px"
                  });
                }
                });
              break;
            default:
              TweenLite.to($('#logo-small'), 1, {top:"10px"});
              $('#logo').hide();
              break;
          }
          if(index == 1) {
            $('#up').hide();
            $('#down').show();
          }else{
            $('#up').show();
            $('#down').show();
          }
          if(index == 9) {
            $('#down').hide();
          }
        },

      };
  }


}
