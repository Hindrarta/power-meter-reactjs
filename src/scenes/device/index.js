import React from "react";
import { useParams } from "react-router-dom";

const DeviceDetails = () => {
    const { id } = useParams();
    return <div>Device Details = {id}</div>;
};

export default DeviceDetails;
