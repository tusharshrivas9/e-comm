import React,{useState,useContext,createContext} from 'react';

const AuthContext = createContext()


const UserContext = ({children}) => {

    const [userAuth , setuserAuth] = useState({
        user:null,
        token:""
    })

  return (
    <div>
      <AuthContext.Provider value={[userAuth,setuserAuth]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

const useAuth = ()=>useContext(AuthContext)

export {useAuth,UserContext}