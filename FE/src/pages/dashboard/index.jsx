import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Form, Button, Card } from "antd";
import { Formik } from "formik";
import "./style.scss";
import FormField from "../../components/form-field";
const { Title } = Typography;

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Row justify={"center"} className="my-6" align={"middle"}>
                <Col span={18}>
                    <Card>
                        <Formik
                            enableReinitialize
                            initialValues={{}}
                            validate={(values) => {
                                let errors = {};
                                return errors;
                            }}
                            onSubmit={(values) => {
                                console.log("values: ", values);
                            }}
                        >
                            {({ handleSubmit }) => {
                                return (
                                    <Form layout="vertical">
                                        <FormField
                                            type="textarea"
                                            name="name"
                                            label={"Start with a detailed description"}
                                            placeholder={"Start with a detailed description"}
                                        />
                                        <Button type="primary">Generate</Button>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;
