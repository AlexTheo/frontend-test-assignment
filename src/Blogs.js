import { Divider, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useState } from "react";
import BlogCards from "./BlogCards";

import "./Blogs.scss";

function Blogs() {
    const [selectedFilter, setSelectedFilter] = useState("all");

    return (<>
        <header className="blogs-header">
            <Typography variant="h4">Blogs: </Typography>
            <ToggleButtonGroup
                value={selectedFilter}
                exclusive
                onChange={(e) => setSelectedFilter(e.target.value)}
            >
                <ToggleButton value="latest">
                    Latest
                </ToggleButton>
                <ToggleButton value="author">
                    By Damian Kastbauer
                </ToggleButton>
                <ToggleButton value="all">
                    All
                </ToggleButton>
            </ToggleButtonGroup>
        </header>
        <Divider variant="fullWidth"></Divider>
        <section className="blogs">
            <BlogCards/>
        </section>
    </>);
}
  
export default Blogs;
  