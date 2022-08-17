import React, { useEffect, useState } from "react";
import "./Home.scss";
import data from "../../data/data.json";
import styled from "styled-components";
import moment from "moment";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const NewsList = ({ news }) => {
  const navigate = useNavigate();

  return news?.map((item, index) => (
    <div
      className="left_news_item"
      key={index}
      onClick={() => navigate(`/news/details/${item?.id}`)}
    >
      <h4 className="news_serial">{item?.id}</h4>
      <div>
        <span className="news_headline">{item?.headline}</span>
        <span>{`${item?.subheadline ? " / " : ""}${item?.subheadline}`}</span>
      </div>
    </div>
  ));
};

const Home = () => {
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <>
      <div className="container">
        <div className="left_news_list">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tab}
              onChange={handleTabChange}
              aria-label="basic tabs example"
            >
              <Tab label={data?.latest?.name} {...a11yProps(0)} />
              <Tab label={data?.mostread?.name} {...a11yProps(1)} />
              <Tab label={data?.discussed?.name} {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={tab} index={0}>
            {data?.latest?.items && <NewsList news={data?.latest?.items} />}
          </TabPanel>
          <TabPanel value={tab} index={1}>
            {data?.mostread?.items && <NewsList news={data?.mostread?.items} />}
          </TabPanel>
          <TabPanel value={tab} index={2}>
            {data?.discussed?.items && (
              <NewsList news={data?.discussed?.items} />
            )}
          </TabPanel>

          <div className="advice_wrapper">
            <span className="advice_title">বিজ্ঞাপন</span>
            <div className="advice">AD-1</div>
          </div>
        </div>
        <div className="main">
          <div className="selected_news">
            <div className="title_wrapper">
              <div className="circle"></div>
              <span className="selected_title">{data?.selected?.name}</span>
            </div>
            <TopNews>
              <img
                className="top_news_img"
                src={data?.selected?.items[0]?.thumb}
                alt=""
              />
              <span className="top_news_title">
                {data?.selected?.items[0].headline}
              </span>
            </TopNews>
            <div className="more_news_wrapper">
              {data?.selected?.items &&
                data?.selected?.items?.map((item, index) => (
                  <div className="more_news" key={index}>
                    <img className="news_img" src={item?.thumb} alt="" />

                    <span className="more_news_title">{item?.headline}</span>
                  </div>
                ))}
            </div>
          </div>
          <div className="right_news_list">
            <div className="advice_wrapper">
              <span className="advice_title">বিজ্ঞাপন</span>
              <div className="advice">AD-1</div>
            </div>

            <div className="right_news_container">
              {data?.selected?.items &&
                data?.selected?.items?.map((item, index) => (
                  <div className="right_news_wrapper" key={index}>
                    <div className="content_wrapper">
                      <span className="right_news_title">{item?.headline}</span>

                      <div className="news_img_wrapper">
                        <img className="news_img" src={item?.thumb} alt="" />
                      </div>
                    </div>

                    <span className="news_post_time">
                      {moment().endOf("day").fromNow()}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="addvice_two_wrapper">
        <div className="addvice_two">
          <span>ADD-2</span>
        </div>
      </div>
    </>
  );
};

const TopNews = styled.div`
  height: 300px;
  width: 100%;
  /* background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center; */
  position: relative;

  .top_news_img {
    height: 100%;
    width: 100%;
  }

  .top_news_title {
    font-size: 16px;
    font-weight: bold;
    color: white;
    padding: 10px;
    position: absolute;
    left: 20px;
    bottom: 20px;
  }
`;

export default Home;
