import { NavigationContainer } from '@react-navigation/native';
import Navigation from './pages/Navigation'
import { Provider as PaperProvider } from 'react-native-paper';
import React, { useState, useMemo} from "react";
import { AppContext } from './services/appContext';

export default function App() {
  const [userDetails, setUserDetails] = useState(null)

  const [user, setUser] = useState({
      id: null,
      name: '',
      username: '',
      password: '',
      avatar: ''
  })

  const usersObject = {
      id: user.id,
      name: user.name, 
      username: user.username, 
      password: user.password,
      avatar: user.avatar,
      setUser: setUser
  }

  const [userList, setUserList] = useState([])

  const users = {
      userList: userList,
      setUserList: setUserList
  }

  const UserProvided = useMemo(() => ({userDetails, setUserDetails}), [userDetails, setUserDetails])

  const [updateHandler, setUpdateHandler] = useState(false)
  const ProviderUpdateHandler = useMemo(() => ({updateHandler, setUpdateHandler}), [updateHandler, setUpdateHandler])

  return (
    <AppContext.Provider value={{UserProvided, ProviderUpdateHandler, usersObject, users}}>
      <PaperProvider>
        <NavigationContainer>
          <Navigation/>
        </NavigationContainer>
      </PaperProvider>
    </AppContext.Provider>
  );
}
