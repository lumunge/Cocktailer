import { useState, useEffect } from "react";
import axios from "axios";
import {
	Container,
	Typography,
	Card,
	CardMedia,
	CardContent,
	CardActions,
    CardHeader,
	IconButton,
	Collapse,
	Grid,
    ListItem,
    Box, 
    LinearProgress
} from "@material-ui/core";
import Like from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import Expand from "@material-ui/icons/ExpandMore";
import useStyles from "./styles";
import Auth from "../Home/Auth";

const Recipe = (props) => {
    const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("profile"))
	);
	const [meals, setMeals] = useState([]);
	const [meal, setMeal] = useState([]);
    const [loading, setLoading] = useState(false);
	const [progress, setProgress] = useState(10);
	const [expanded, setExpanded] = useState(false);

	const path = props.location.pathname;
	const mealId = path.substr(9);

	const classes = useStyles();

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	useEffect(() => {
		axios
			.get(
				`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
			)
			.then((res) => {
				const { meals } = res.data;
				setMeals(meals);
				setMeal(meals[0]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

    useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10))
		}, 800);
		return () => {
			clearInterval(timer);
		}
	}, []);

	const LinearProgressWithLabel = (props) => {
		return(
			<Box display="flex" alignItems="center">
				<Box width="100%" mr={1}>
					<LinearProgress variant="determinate" {...props}/>
					</Box>
					<Box minWidth={35}>
						<Typography variant="body2" color="textSecondary">
							{`${Math.round(props.value)}%`}
						</Typography>
					</Box>
			</Box>
		)
	}

	// getting all ingredients
	const ingredients = [];
	for (let i = 1; i <= 20; i++) {
		if (meal[`strIngredient${i}`]) {
			ingredients.push(
				`${meal[`strMeasure${i}`]} --- ${meal[`strIngredient${i}`]}`
			);
		} else {
			break;
		}
	}

	return (
        <>
        {user ? (
		<Container className={classes.main}>
			{meals.map((meal) => (
				<div key={meal.idMeal}>
					<Typography variant="h4" className={classes.title}>{meal.strMeal}</Typography>
					<Grid
						container
						spacing={3}
						className={classes.mainContainer}
					>
						<Grid item sm={6} xs={12} className={classes.ingredients}>
							<Card>
                            <CardHeader
                                title={`${meal.strArea} ${meal.strCategory}`}
                                subheader={`Category: ${meal.strCategory}`}
                            />
                            <Typography variant="h5">
								<ListItem>Ingredients: </ListItem>
                                </Typography>
									{ingredients.map((ingredient) => (
										<ListItem>
                                           {ingredient}
                                        </ListItem>
									))}
							</Card>
						</Grid>
						<Grid item sm={6} xs={12} className={classes.meal}>
							<Card>
								<CardMedia
									className={classes.image}
									image={meal.strMealThumb}
									title={meal.strMeal}
								/>
								<CardActions disableSpacing>
									<IconButton>
										<Like />
									</IconButton>
									<IconButton>
										<Share />
									</IconButton>
									<IconButton onClick={handleExpandClick}>
										<Expand />
									</IconButton>
								</CardActions>
								<Collapse
									in={expanded}
									timeout="auto"
									unmountOnExit
								>
									<CardContent>
										<Typography variant="h5">
											Preparation
										</Typography>
										<Typography paragraph>
											{meal.strInstructions}
										</Typography>
									</CardContent>
								</Collapse>
							</Card>
						</Grid>
					</Grid>
					<div className={classes.tutorial}>
						<Typography variant="h4">Video Tutorial</Typography>
							<iframe
								title={`How to prepare ${meal.strMeal}`}
								width="1000" height="500"
								src={`https://www.youtube.com/embed/${meal.strYoutube.slice(
									-11
								)}`}
							></iframe>
					</div>
				</div>
			))}           
		</Container>
        ) : (
            <Auth/>
        )}
        </>
	);
};

export default Recipe;