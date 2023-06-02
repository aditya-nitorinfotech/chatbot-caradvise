import React, { useEffect } from 'react'
import './Header.css'
import { Row, Col, Space, Typography, } from 'antd'
import { Avatar } from 'antd'
import { NavLink } from 'react-router-dom'
import logo from "../../logo/logo.png"

const { Text } = Typography

const CommonHeader = () => {

    useEffect(() => {

    }, [])

    return (
        <Row align="middle" className="header" style={{ padding: "2%", justifyContent: "center"}}>
            <Col flex={1}>
                <div className="header-title">
                    {/* <Avatar
                        size={20}
                        // src={"https://shorturl.at/hBE68"}
                        src={logo}
                        // src="https://storage.googleapis.com/teamboss/team/badge/default.jpg"
                        style={{ marginRight: '5px' }}
                    /> */}
                    <img
                        alt="Logo"
                        src={logo}
                        height={"100px"}
                        width={"100px"}

                    />

                    {/* <Text>Nitor Infotech</Text> */}
                </div>
            </Col>

            <Col flex={2} className="notificationCol">
                <div className="header-account-setting">
                    <Space size={10} style={{ lineHeight: 0 }}>

                        <Col span={24}>
                            <NavLink to="/">
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>About Team</Text>
                            </NavLink>
                        </Col>
                        <Col span={24}>
                            <NavLink to="/">
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Settings</Text>
                            </NavLink>
                        </Col>

                        <Col span={24}>
                            <NavLink to="/">
                                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Account</Text>
                            </NavLink>
                        </Col>
                    </Space>
                </div>
            </Col>
        </Row>
    )
}

export default CommonHeader

