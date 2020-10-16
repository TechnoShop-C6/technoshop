import React from "react"

class Organisation extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <div>
                   <h2>This company was created by Talel && Oussama in 15/10/2020 </h2>
                   <h3>TechnoShop is a company for buying all technology products </h3>
                </div>
                <div className="table">
                    <td>
                     <a href="https://www.facebook.com/oussema.heni/" >
                        <img className="oussama-img " src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/52353331_10212720364513945_168242965725052928_o.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=3VkIO1eKOHoAX8x3KYg&_nc_ht=scontent.ftun4-1.fna&oh=404cdbf9ec055a3120a4a68f01cfd447&oe=5FADF41D" alt=""/>  
                        <div className="namediv">Oussama</div>
                    </a>
                    </td>
                    <td>               
                    <a href="https://www.facebook.com/elghali.talel/" >
                        <img className="oussama-img " src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/86444577_544607683068835_86977850862731264_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=9hrJUAflJLkAX8Bak5L&_nc_ht=scontent.ftun4-1.fna&oh=58b60710a8580d815eab6f783df33590&oe=5FAFA4F6" alt=""/>
                        <div className="namediv">Talel</div>
                    </a> 
                    </td>      
                </div>
                   
            </div>
        )
    }
}
export default  Organisation ;