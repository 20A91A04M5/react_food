

function Header() {
    const head = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 10px", 
        backgroundColor:"purple",
        width:"98%"
    };

    return (
        <>
            <nav style={head}>
                <img
                    src="https://vismaifood.com/themes/pivisions/assets/images/logo.png"
                    alt="food_img"
                    width="60px"
                    
                />
                <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0, backgroundColor:"purple" }}>
                    <li style={{ margin: "0 10px" }}>
                        <a href="#" style={{textDecoration:"none", color:"white",}}>Search</a>
                    </li>
                    <li style={{ margin: "0 10px" }}>
                        <a href="#" style={{textDecoration:"none", color:"white",}}>Home</a>
                    </li>
                    <li style={{ margin: "0 10px" }}>
                        <a href="#" style={{textDecoration:"none", color:"white",}}>Recipes</a>
                    </li>
                    <li style={{ margin: "0 10px" }}>
                        <a href="#" style={{textDecoration:"none", color:"white",}}>Subscribe</a>
                    </li>
                </ul>
            </nav>
            
            <div style={{ position: "relative", width: "100%" }}>
                <input
                    style={{ padding: "10px", width: "100%", boxSizing: "border-box" }}
                    type="text"
                    placeholder="Search by Ingredients, Cuisine, Diet"
                />
                <img
                    src="https://vismaifood.com/themes/pivisions/assets/images/icons/arrow-right-orange.svg"
                    alt="arrow"
                    style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "20px",
                        height: "20px",
                        pointerEvents: "none",
                        cursor: "pointer"
                    }}
                />
            </div>
        </>
    );
}

export default Header