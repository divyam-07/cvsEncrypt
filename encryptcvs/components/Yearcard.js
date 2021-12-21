const Yearcard = () => {
    return (
        <div className="col-sm-4" style={{marginBottom:"2rem", zIndex:"2"}} >
            <div className="card" style={{border:"1px"}} >
                <img className="card-img-top" src="https://lh3.googleusercontent.com/ogw/ADea4I6axp6EPNyDYM-Yyj434triSJaLI5xS_rur0Ic1xQ=s83-c-mo" alt="Card image cap" />
                <div className="card-body" style={{background:"black"}}>
                    <h5 className="card-title" style={{color:"white"}}>The Don</h5>
                    <p className="card-text" style={{color:"white"}}>Some Designation</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    );
};

export default Yearcard;
