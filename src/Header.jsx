const Header = ({ text }) => {
    return (
        <header>
            <div style={{
                fontSize: "40px",
                textAlign: "center", 
                position: "absolute", 
                left: "50%",           
                transform: "translateX(-50%)", 
            }}>
                <strong>{text}</strong>
            </div>

            <div className = "sign-out">
                <strong>Sign Out</strong>
            </div>
        </header>
    );
}

export default Header;
