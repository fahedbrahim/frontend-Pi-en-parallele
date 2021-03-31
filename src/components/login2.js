export default function Log(){
    return(
<>
{connectUser.role === "visiteur" ?
           ( <section className="Form my-4 mx-5">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-5">
                            
                        </div>
                        <div className="col-lg-7 px-5 py-5">
                            <h1 className="font-weight-bold py-3">WeCode</h1>
                            <h4>Sign into your account</h4>
                            <form>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                    <input type="email" placeholder="Email" className="form-control my-3 p-4" name="email" value={user.email} onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                    <input type="password" placeholder="Password" className="form-control my-3 p-4" name="password" value={user.password} onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                    <button type="button" className="btn1" onClick={handleLogin}>Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>) : (<></>)
            }
            {connectUser.role === "user" ?
            (<><button onClick={handleUsers}>users</button> 
            <button onClick = {logoutUser}>Logout</button></>) : 
            (<></>)}
</>
    )
}