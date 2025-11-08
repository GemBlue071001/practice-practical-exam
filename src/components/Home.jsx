import { useEffect, useState } from "react"
import { Navbar, Nav, NavLink, Container, Row, Col, Card, CardBody } from "react-bootstrap"
import { Link } from "react-router-dom"

const Home = () => {
    const url = import.meta.env.VITE_API_BASE_URL
    const [courses, setCourse] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {

        const getCourses = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`getCourses fail`)
                }

                let result = await response.json()
                result = result.filter(x => !x.isCompleted)

                console.log(result);
                setCourse(result); // Set data vào state
            } catch (error) {
                throw new Error(`getCourses fail ${error}`)
            } finally {
                setIsLoading(false)
            }
        }
        getCourses();
    }, [])

    if (isLoading) return (
        <div className="text-center">
            Loading ...
        </div>
    )

    return (
        <>
            <Container>
                <Row>
                    {!isLoading && courses.map((course) => {
                        return (

                            <Col className="mb-4" md={6} lg={3}>
                                <Card className="h-100">
                                    <Card.Img
                                        variant="top"
                                        src={course.lessonImage}
                                        className="w-100 h-100"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <CardBody>
                                        <Card.Title>
                                            {course.lessonTitle}
                                        </Card.Title>

                                        <Card.Subtitle>
                                            Level: {course.level}
                                        </Card.Subtitle>

                                        <Card.Text>
                                            EstimatedTime: {course.estimatedTime}
                                        </Card.Text>

                                        <Card.Text>
                                            Progres: {course.isCompleted ? `Completed` : `In Progress`}
                                        </Card.Text>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Home