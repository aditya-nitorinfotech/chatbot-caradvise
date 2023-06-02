import React, { useEffect } from 'react'
import './Header.css'
import { Row, Col, Typography,  } from 'antd'

import { Avatar } from 'antd'

const { Text } = Typography

const CommonFooter = () => {

    useEffect(() => {

    }, [])

    return (
        <Row align="middle" className="header" style={{ padding: "0.5%", justifyContent: "center",alignItems:"center",textAlign:"center" }}>
            <Col flex={1}>
                <div className="header-title-2">
                    {/* <Avatar
                        size={50}
                        src={"../../logo/logo.png"}
                        // src="https://storage.googleapis.com/teamboss/team/badge/default.jpg"
                        style={{ marginRight: '5px' }}
                    /> */}
                    {/* <Row
                        className="logo"
                        style={{
                            height: 70,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            alt="Logo"
                            src={"../../logo/logo.png"}
                        />

                    </Row> */}
                    <Text>Nitor Infotech @2023</Text>
                </div>
            </Col>
          
        </Row>
    )
}

export default CommonFooter