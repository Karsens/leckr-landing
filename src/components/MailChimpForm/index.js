import React from "react";

import Settings from "settings/index";
// a basic form

class MailChimpForm extends React.Component {

    state={
        value: ""
    }

  
  render() {

    return (
      <div>

        <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css" />

        <div style={{
            marginTop:35, 
            clear: "left",
            font: "14px Helvetica,Arial,sans-serif",
            width: "100%"
            }}
        >
          <form
            method="post" 
            id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" 
            className="validate" 
            // target="_blank" 
            noValidate
          action={Settings.mailChimpSubscribeUrl}>
            
            <div id="mc_embed_signup_scroll">

              <input 
                style={{float: "left", borderRadius:10, fontSize: 30, paddingLeft:10,
                //backgroundColor: Settings.colors.primary,
                width: "60%",
                borderTopColor: Settings.colors.primaryLighter,
                borderBottomColor: Settings.colors.primaryDarker,
                borderRightColor: Settings.colors.primaryDarker,
                borderLeftColor: Settings.colors.primaryLighter,

            }}
                value={this.state.value}
                ref="searchStringInput"
                onChange={({value})=>this.setState({value})}
                type="email" 
                name="EMAIL" 
                id="mce-EMAIL" 
                placeholder="Your email" 
                required 
              />

              <div style={{ position: "absolute", left: -5000 }} aria-hidden="true">
                <input type="text" name="b_211c8e286b504f8faf1b92bb2_74a7bddfd2" tabIndex="-1" value="" />
              </div>
              <div className="clear">
                <input 
                    style={{
                        borderRadius: 10,
                        fontSize:30,
                        color:"#FFF",
                        marginLeft:10,
                        width: "30%",
                        backgroundColor: Settings.colors.primary,
                        borderTopColor: Settings.colors.primaryLighter,
                        borderBottomColor: Settings.colors.primaryDarker,
                        borderRightColor: Settings.colors.primaryDarker,
                        borderLeftColor: Settings.colors.primaryLighter,

                    }}
                    
                    type="submit" 
                    value="Get it" 
                    name="subscribe" 
                    id="mc-embedded-subscribe" 
                    className="button" />
              </div>

            </div>
          </form>
        </div>


      </div>
    );
  }
}

export default MailChimpForm;
