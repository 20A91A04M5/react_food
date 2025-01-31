import "./Banner.css"
function Card(){
   
    return (
        <>
        <h2 style={{color:"orange",fontSize:"30px"}}>Trending Recipes</h2>
        <marquee behavior="" direction="">
            <div style={{display:"flex", gap:"20px"}}>
                <div>
                <img src="https://vismaifood.com/storage/app/uploads/public/3e8/655/e00/thumb__700_0_0_0_auto.jpg" alt="" style={{borderRadius:"20px", width:"350px", height:"400px"}}/>
                <p className="p1">Wedding Style Bottle Gourd Halwa Recipe | <br /> Sorakaya Halwa Recipe </p>
                </div>
                <div>
                <img src="https://vismaifood.com/storage/app/uploads/public/155/a80/259/thumb__700_0_0_0_auto.jpg" alt="" style={{borderRadius:"20px", width:"350px", height:"400px"}}/>
                <p className="p1">Street-Style Mumbai Sandwich Recipe <br /> | Sandwich Recipe</p>
                </div>
                <div>
                <img src="https://vismaifood.com/storage/app/uploads/public/9ed/723/67b/thumb__700_0_0_0_auto.jpg" alt="" style={{borderRadius:"20px", width:"350px", height:"400px"}}/>
                <p className="p1">South Indian Style Mutton Dum Biryani <br /> | Mutton Dum Biryani Recipe</p>
                </div>
                <div>
                <img src="https://vismaifood.com/storage/app/uploads/public/0f6/c45/efb/thumb__700_0_0_0_auto.jpg" alt="" style={{borderRadius:"20px", width:"350px", height:"400px"}}/>
                <p className="p1">Thick And Tasty Ullipaya Pulusu Recipe | <br /> Ullipaya Pulusu | Onion Pulusu Recipe</p>
                </div>
                <div>
                <img src="https://vismaifood.com/storage/app/uploads/public/0bf/c42/3e1/thumb__700_0_0_0_auto.jpg" alt="" style={{borderRadius:"20px", width:"350px", height:"400px"}}/>
                <p className="p1">Mushroom Baby Corn Masala Recipe <br /> | Mushroom Baby Corn</p>
                </div>
                <div>
                <img src="https://vismaifood.com/storage/app/uploads/public/179/946/acb/thumb__700_0_0_0_auto.jpg" alt="" style={{borderRadius:"20px", width:"350px", height:"400px"}}/>
                <p className="p1">Superhit Kakarakaya kotthimeera karam Recipe <br /> | Bitter Gourd With Coriander Leaves Recipe</p>
                </div>
            </div>
        </marquee>
        </>
    )
}

export default Card

