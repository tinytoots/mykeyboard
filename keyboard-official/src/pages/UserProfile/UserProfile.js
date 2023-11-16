import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Typography } from 'antd';
import './UserProfile.css'


const { Paragraph } = Typography;

export default function Profile() {
    const [userName, setUserName] = useState(null);

    useEffect(() => {
        console.log('Effect is running');
     
        console.log('Sending authentication request...');
  fetch('http://localhost:18080/openam/json/realms/root/realms/mykeyboard/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-OpenAM-Username': 'yifu',
      'X-OpenAM-Password': 'Work@2023',
      'Accept-API-Version': 'resource=2.0, protocol=1.0'
    }
  })
  .then(authResponse => {
    console.log('Authentication response received');
    if (!authResponse.ok) {
      throw new Error('Authentication response was not ok');
    }
    console.log('authenticate is ok');
    return authResponse.json();
  })
  .then(authData => {
    console.log('Authentication successful, received authData:', authData);
    // Step 2: Use the token to get session info
    const tokenId = authData.tokenId; // Assuming the response has a tokenId
    return fetch('http://localhost:18080/openam/json/realms/root/realms/mykeyboard/sessions/?_action=getSessionInfo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept-API-Version': 'resource=2.0, protocol=1.0',
                    'iPlanetDirectoryPro': tokenId
                },
                // body: JSON.stringify({ tokenId: iPlanetDirectoryPro })
            });
        })
        .then(sessionResponse => {
            console.log('Session info response received');
            if (!sessionResponse.ok) {
              throw new Error('Session response was not ok');
            }
            return sessionResponse.json();
          })
          .then(sessionData => {
            console.log('Session Info:', sessionData);
            if (sessionData && sessionData.username) {
              setUserName(sessionData.username);
            } else {
              console.log('Username not found in session response');
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
       
    }, []);

    

    return (
        <div className="root">
            <Typography>
                {/* <Title><FormattedMessage id="intro"/></Title> */}
                <Paragraph>
                    User profile test page
                </Paragraph>
                {userName && <Paragraph>Welcome, {userName}!</Paragraph>}
                <br/><br/><br/><br/>
            </Typography>
        </div>
    )
}
