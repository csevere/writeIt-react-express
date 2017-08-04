import React, {Component} from 'react';
import { Form, Grid, Row, Col, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link} from 'react-router-dom';

function tChapterDisplay(props){ 

	const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
     }
	console.log(props);
	return (
		<Row>
			<Grid className = "writemenucat text-center ch-forms">
				<Row>
				  <Col sm = {8} md = {10} className = "ch-forms-2 col-md-offset-3">
					<Slider {...settings}>

					  <div className = "slick-form 1">
						<Grid>
							<div>
								<div id = "one">What is the point of the chapter in one sentence?</div>
								<div>{props.chapters.scene_number}</div>
							</div>

							<div>
								<div id = "two">How do the scenes directly affect the plot or subplot?</div>
								<div>{props.chapters.scene_plot}</div>
							</div>

							<div>
								<div id = "three">How do the scenes directly affect character development?</div>
								<div>{props.chapters.scene_char1}</div>
							</div>

							<div>
								<div id = "four">How do the characters personalities come out through the dialogue?</div>
								<div>{props.chapters.scene_dialogue}</div>
							</div>

							<div>
								<div id = "five">What are the major conflicts in the scenes?</div>
								<div>{props.chapters.relevant_conflict}</div>
							</div>

						  </Grid>
						</div>

						<div className = "slick-form 2">
							<Grid>
								<div>
									<div id = "one">Are there places where dialogue could be replaced with action instead?</div>
									<div>{props.chapters.relevant_dialogue}</div>
								</div>

								<div>
									<div id = "two">How much character thought and reflection is there? Is there too much?</div>
									<div>{props.chapters.char_thought}</div>
								</div>

								<div>
									<div id = "three">What is the narrative POV? First, second, omniscient?</div>
									<div>{props.chapters.pov}</div>
								</div>

								<div>
									<div id = "four">What is the POV character for the scenes?Protagonist, antagonist, or ally?</div>
									<div>{props.chapters.pov_char}</div>
								</div>

								<div>
									<div id = "five">What is the setting for each scene?</div>
									<div>{props.chapters.setting}</div>
								</div>

							</Grid>
						  </div>

						  <div className = "slick-form 3">
							<Grid>
								<div>
									<div id = "one">How important is the setting to the character?</div>
									<div>{props.chapters.setting_char}</div>
								</div>

								<div>
									<div id = "two">How important is the setting to the plot?</div>
									<div>{props.chapters.setting_plot}</div>
								</div>

								<div>
									<div id = "three">How do the characters interact with the setting?</div>
									<div>{props.chapters.setting_rev}</div>
								</div>

								<div>
									<div id = "four">What kind of mood do the scenes have?</div>
									<div>{props.chapters.scene_mood}</div>
								</div>

								<div>
									<div id = "five">Are the characters actions predictable or complex?</div>
									<div>{props.chapters.scene_char2}</div>
								</div>

							</Grid>
						  </div>
					  </Slider>

					</Col>

					<Row>
					  <Grid className = "fourth-row-left">
						<Col md = {3}>
						  <Link to = "/writeMenu" className = "return-writemenu">
							<img src = "https://cdn4.iconfinder.com/data/icons/lifestyle-set-2/100/07a3c3443f894cb3fa7a93ee3c496233-512.png"/>
							<div>Return to Write Menu</div>
						  </Link>
						</Col>

					  </Grid>

					  <Grid className = "fourth-row-right">
						<Col md = {3} className = "col-md-offset-8">

						</Col>
					  </Grid>


					</Row>

					</Row>
				  </Grid>
		</Row>

	)
}

export default tChapterDisplay;