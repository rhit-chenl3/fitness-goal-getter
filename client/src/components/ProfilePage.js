import React from 'react'

export default function ProfilePage({user}) {
    
    return (
        <div className="Home">
            <div className='lander'>
                <h2>Welcome to your profile!</h2>
                <p className="text-muted">Here you can see and update your personal info</p>
                <br/>
                {user ? (
                    <>
                        {user.profiles ? (
                            <div>

                            <br/>
                            <h5>Your current BMI: {(user.profiles[0].weight / ((user.profiles[0].height * 0.01)^2)).toFixed(0)}</h5>
                            
                            <p className="text-muted">Please note that the BMI is not always an accurate indicator of weight status</p>
                            <img src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.15752-9/269885323_931586591060761_5927827463391069206_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=0nFzWryjdJ8AX8GwEcj&tn=J0W_7GHedW-k0UGO&_nc_ht=scontent-lga3-2.xx&oh=03_AVJJVxCVNFULAeM8ey76nMf2KhvUAdLNTXvFkgQ4KtXtLw&oe=61F986FA" alt="BMI_Chart" width="150"/>
                            <br/>
                            <a href='https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html'>Learn more from the CDC</a>

                            </div>
                        ) : (
                            <>
                            </>
                            
                        )}
                    </>
                    ) : (
                        <div></div>   
                )}
            </div>
            
        </div>
    )
}
