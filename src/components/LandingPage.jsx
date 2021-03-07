import React from "react"
import Skyline from "../images/skyline.jpg"
import { Tooltip, Typography, Avatar } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import "../App.css"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
    Heading,
    Input,
    Button,
    Stack
  } from "@chakra-ui/react"

const LandingPage = (props) => {

const { setScreen } = props;

const handleLogOut = () => {
  setScreen("LoginPage")
}

const handleAddContract = () => {
  setScreen("ContractsPage")
}

const handleSearchContract = () => {
  setScreen("SearchContractsPage")
}

const { Title } = Typography;

    return (
        <div>
            <img src = {Skyline} alt = "skyline" width = "100%"></img>
            <div className = "navbar">
              <Avatar icon={<UserOutlined />} />
              <h4>username</h4>
              <Menu>
                <MenuButton as={Button}>
                    LIST
                </MenuButton>
                <MenuList>
                  <MenuItem onClick = {handleLogOut}>Logout</MenuItem>
                  <MenuItem>AAAAA</MenuItem>
                  <MenuItem>BBBBBB</MenuItem>
                  <MenuItem>CCCCCC</MenuItem>
                 </MenuList>
              </Menu>
            </div>
            <div className = "header">
                <Heading>Build to Connect</Heading>
                <Heading size = "sm">Building Meaningful Connections Between Contractors in Singapore</Heading>
            </div>
            <div className = "searchbar">
            <Input bgColor = "white" size = "large" placeholder = "Contractor Name..."></Input>
            <Input bgColor = "white" size = "large" placeholder = "Specialisation..."></Input>
            <Button>
              <SearchOutlined/>
            </Button>
            </div>
            <div className = "quick-features">
              <Button onClick = {handleAddContract}>Add Contract</Button>
              <Button onClick = {handleSearchContract}>Search Contracts</Button>
            </div>
        </div>
    )


}

export default LandingPage