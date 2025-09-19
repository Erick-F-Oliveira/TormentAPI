import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

/**
 * Componente VerticalTabs
 * @param {Array} tabs - Array de objetos { label: string, content: ReactNode }
 */
function VerticalTabs({ tabs }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: "#eee",
                display: "flex",
                height: 224,
            }}
        >
            <Tabs
                orientation="vertical"//Orientação do menu
                variant="scrollable"
                label="Tormenta tab"
                variantType="tormenta"
                value={value}
                onChange={handleChange}
                aria-label="Menu vertical"
                sx={{
                    borderRight: 1, borderColor: "divider"
                }}
            >
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        label={tab.label}
                        sx={{
                            color: tab.textColor || "#ff3fd5",
                            "&.Mui-selected": {
                                color: tab.selectedColor || "#738ADB",
                            },
                        }}
                    />
                ))}
            </Tabs>

            {tabs.map((tab, index) => (
                <TabPanel key={index} value={value} index={index}>
                    {tab.content}
                </TabPanel>
            ))}
        </Box>
    );
}

VerticalTabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired,
        })
    ).isRequired,
};

export default VerticalTabs;
