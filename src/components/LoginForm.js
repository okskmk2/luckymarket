import React from 'react'

const LoginForm = (props) => {
    return (
        <div>
            login page?
            <button onClick={()=>{props.history.push('/Home')}}>홈으로 이동</button>
        </div>
    )
}

export default LoginForm
