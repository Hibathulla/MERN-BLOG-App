import { useHistory } from "react-router-dom";
import { Fragment } from "react";

import Form from "../../components/Form/Form"
import { axiosInstance } from "../../config";

const Write = () => {

    const history = useHistory();

    const fetchHandler = async (data) => {

        try {
            await axiosInstance.post("posts", data)
            history.replace("/home")
        } catch {

        }
    }

    return ( 
    <Fragment>
    <Form onOrder={fetchHandler} /> 
    </Fragment>
    );
};

export default Write;