/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import male from "assets/images/patients.png";
import female from "assets/images/patients_fm.png";
import MDButton from "components/MDButton";
import { Icon } from "@mui/material";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";

export default function data() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "user", accessor: "user", width: "45%", align: "left" },
      { Header: "contact", accessor: "contact", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "treatment", accessor: "start", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        user: <Author image={male} name="John Wick" email="between appendectomy" />,
        contact: <Job title="099-999-9999" description="john@creative-tim.com" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="admit" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        start: <Job title="01/03/2020" description="11:30 AM" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <MDBox mr={1}>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </MDButton>
            </MDBox>
          </MDTypography>
        ),
      },
      {
        user: <Author image={male} name="Son Her" email="parkinson's disease" />,
        contact: <Job title="088-888-8888" description="son@creative-tim.com" />,
        start: <Job title="04/12/2021" description="09:30 AM" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="stay home" color="default" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <MDBox mr={1}>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </MDButton>
            </MDBox>
          </MDTypography>
        ),
      },
      {
        user: <Author image={female} name="Ya Ya" email="covid-19" />,
        contact: <Job title="097-7777-7777" description="yaya@creative-tim.com" />,
        start: <Job title="20/02/2022" description="09:00 AM" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="success" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <MDBox mr={1}>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </MDButton>
            </MDBox>
          </MDTypography>
        ),
      },
      {
        user: <Author image={male} name="Ka Ka" email="parkinson's disease" />,
        contact: <Job title="088-888-8888" description="ka@creative-tim.com" />,
        start: <Job title="02/11/2022" description="09:30 AM" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="stay home" color="default" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <MDBox mr={1}>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </MDButton>
            </MDBox>
          </MDTypography>
        ),
      },
      {
        user: <Author image={female} name="Chai na" email="between appendectomy" />,
        contact: <Job title="097-7777-7777" description="na@creative-tim.com" />,
        start: <Job title="20/09/2022" description="09:00 AM" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="admit" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <MDBox mr={1}>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </MDButton>
            </MDBox>
          </MDTypography>
        ),
      },
      {
        user: <Author image={male} name="Lol Yo" email="appendectomy" />,
        contact: <Job title="099-999-9999" description="john@creative-tim.com" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="success" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        start: <Job title="01/03/2020" description="11:30 AM" />,
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <MDBox mr={1}>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </MDButton>
            </MDBox>
          </MDTypography>
        ),
      },
      {
        user: <Author image={male} name="Opp Lee" email="parkinson's disease" />,
        contact: <Job title="088-888-8888" description="son@creative-tim.com" />,
        start: <Job title="04/12/2021" description="09:30 AM" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="stay home" color="default" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            <MDBox mr={1}>
              <MDButton variant="text" color={darkMode ? "white" : "dark"}>
                <Icon>edit</Icon>&nbsp;edit
              </MDButton>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </MDButton>
            </MDBox>
          </MDTypography>
        ),
      },
    ],
  };
}
