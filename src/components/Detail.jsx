import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Card, Container, Row, Col, Badge, Spinner, Alert, Button } from "react-bootstrap"

const Detail = () => {
    const { id } = useParams()
    const url = import.meta.env.VITE_API_BASE_URL
    const [course, setCourse] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getCourseDetail = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`${url}/${id}`);
                if (!response.ok) {
                    throw new Error(`getCourse detail fail`)
                }

                const result = await response.json()
                console.log(result);
                setCourse(result); // Set single course object vào state
            } catch (error) {
                console.error(`getCourse detail fail ${error}`)
            } finally {
                setIsLoading(false)
            }
        }

        if (id) {
            getCourseDetail();
        }
    }, [id, url]) // Thêm dependencies

    if (isLoading) return (
        <div className="text-center">
            Loading ...
        </div>
    )

    if (!course) return (
        <div className="text-center">
            Course not found
        </div>
    )

    return (
        <>
            <Container className="mt-4">
                <Card>
                    <Card.Img
                        variant="top"
                        src={course.lessonImage}
                        alt={course.lessonTitle}
                        style={{ height: '300px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                        <Card.Title>{course.lessonTitle}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            Level: {course.level}
                        </Card.Subtitle>
                        <Card.Text>
                            Estimated Time: {course.estimatedTime} minutes
                        </Card.Text>
                        <Card.Text>
                            Status: {course.isCompleted ? 'Completed' : 'In Progress'}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div className="d-flex justify-content-between">
                    <Button style={{ width: `100px`, height: `50px`, marginTop: `10px` }}>
                        Home
                    </Button>

                </div>
            </Container>
        </>
    )

}

export default Detail;