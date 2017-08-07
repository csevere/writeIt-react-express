import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import { Grid, Row, Col,Table,Button,Thumbnail } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

class Resources extends Component{
	render(){
		return(
			<div>
				<Grid className="resources-wrapper">
					<Row>
						<Col md = {7} mdOffset={3} >
							<div>
								<h1>Top 10 Resources for Writers</h1>
								<hr id="resource-line" />
							</div>
								<Table class="resources-table" bordered responsive>
								    <thead>
								      <tr>
								        <th id="book">Book</th>
								        <th id="TandA">Title & Author</th>
								        <th id="description">Description</th>
								      </tr>
								    </thead>
								    <tbody>
								      <tr>
								        <td> <Thumbnail href="https://www.amazon.com/Writing-Well-30th-Anniversary-Edition/dp/0060891548/ref=sr_1_1?ie=UTF8&qid=1402583586&sr=8-1&keywords=On+writing+well" src="https://smartblogger.com/wp-content/uploads/2014/06/on-writing-well-william-zinsser.jpeg" /></td>
								        <td>On Writing Well: The Classic Guide to Writing Nonfiction<br /> by William Zinsser</td>
								        <td><p>On Writing Well has been praised for its sound advice, its clarity
								         and the warmth of its style.</p>
								         <p> It is a book for everybody who wants
								          to learn how to write or who needs to do some writing to get through
								          the day, as almost everybody does in the age of e-mail and the Internet.</p> </td>

								      </tr>
								      <tr>
								        <td><Thumbnail href="https://www.amazon.com/Save-Cat-Blake-Snyder-ebook/dp/B00340ESIS/ref=sr_1_1_ha?s=books&ie=UTF8&qid=1402583774&sr=1-1&keywords=Save+the+cat" src="https://smartblogger.com/wp-content/uploads/2014/06/save-the-cat-blake-snyder.png" /></td>
								        <td>Save the Cat by Blake Snyder</td>
								        <td><p>This ultimate insider's guide reveals the secrets that none dare admit,
								        told by a show biz veteran who's proven that you can sell your script if you can
								         save the cat!</p></td>
								      </tr>
								      <tr>
								        <td><Thumbnail href="https://www.amazon.com/Story-Engineering-Larry-Brooks-ebook/dp/B004J35J8W/ref=sr_1_1?s=books&ie=UTF8&qid=1402583863&sr=1-1&keywords=story+engineering+by+larry+brooks" src="https://smartblogger.com/wp-content/uploads/2014/06/story-engineering-larry-brooks.png" /></td>
								        <td>Story Engineering:Mastering the 6 Core Competencies<br /> of Successful Writing by Larry Brooks</td>
								        <td><p>Story Engineering starts with the criteria and the architecture of storytelling,the engineering and
								         design of a story--and uses it as the basis for narrative.</p>
								         <p>The greatest potential of any story is found in the way six specific aspects 
								         of storytelling combine and empower each other on the page. When rendered artfully, 
								         they become a sum in excess of their parts.</p></td>
								      </tr>
								       <tr>
								        <td><Thumbnail href="https://www.amazon.com/Naked-Drunk-Writing-Inhibitions-Compelling-ebook/dp/B003E8AIX4/ref=sr_1_1?s=books&ie=UTF8&qid=1402583962&sr=1-1&keywords=Naked+Drunk+and+writing" src="https://smartblogger.com/wp-content/uploads/2014/06/naked-drunk-and-writing-adair-lara.png" /></td>
								        <td>Naked,Drunk and Writing:Shed your inhibitions and<br />Craft a Compelling Memoir or Personal Essay by Adair Lara</td>
								        <td><p>Naked, Drunk, and Writing is the culmination of Lara’s vast experience as a writer, editor, and teacher.</p>
								         <p>It is packed with insights and advice both practical (“writing workshops you pay for are the best--it’s too easy
								          to quit when you’ve made no investment”) and irreverent (“apply Part A [butt] to Part B [chair]”).</p></td>
								      </tr>
								       <tr>
								        <td><Thumbnail href="https://www.amazon.com/Write-Damn-Novel-Step---Step-ebook/dp/B004WPGF4Y/ref=sr_1_1?s=books&ie=UTF8&qid=1402584007&sr=1-1&keywords=how+to+write+a+damn+good+novel" src="https://smartblogger.com/wp-content/uploads/2014/06/how-to-write-a-damn-good-novel-james-frey.png" /></td>
								        <td>How to Write a Damn Good Novel: A step-by-Step No<br /> Nonsense Guide to Dramatic Storytelling by James N.Frey</td>
								        <td><p>An international bestseller, How to Write a Damn Good Novel will enable
								         all writers to face that intimidating first page, keep them on track when they
								         falter, and help them recognize, analyze, and correct the problems in their
								          own work.</p></td>
								      </tr>
								       <tr>
								        <td><Thumbnail href="https://www.amazon.com/CA-HVERTISING-Ad-Agency-Psychology-Anything-ebook/dp/B002AP9GRG/ref=sr_1_1?s=books&ie=UTF8&qid=1402584057&sr=1-1&keywords=cashvertising" src="https://smartblogger.com/wp-content/uploads/2014/06/cashvertising-drew-eric-whitman.png" /></td>
								        <td>CA$HVERTISING: How to Use More than 100 Secrets<br /> of Ad-Agency Psychology to Make Big Money Selling<br />Anything to Anyone by Drew Eric Whitman</td>
								        <td><p>Prepare for a unique learning experience as author Drew Eric Whitman takes you
								         on a wild, roller-coaster ride through the streets of New York's famed Madison Avenue and teaches 
								         you the specific psychological techniques that today's top copywriters and designers use to influence 
								         the masses.</p><p> He also shares how you can use them to rapidly increase your sales, no matter what you sell.
										In 207 fast-moving pages, Whitman teaches you dozens of well-guarded secrets that he learned during his 30+ years in the ad business.</p></td>
								      </tr>
								       <tr>
								        <td><Thumbnail href="https://www.amazon.com/Writing-Stephen-King-ebook/dp/B000FC0SIM/ref=sr_1_1?s=books&ie=UTF8&qid=1402584098&sr=1-1&keywords=On+writing" src="https://smartblogger.com/wp-content/uploads/2014/06/on-writing-stephen-king.png" /></td>
								        <td>On Writing:A memoir of the craft by Stephen King</td>
								        <td> <p>Part memoir, part master class by one of the bestselling authors of all time,
								        this superb volume is a revealing and practical view of the writer’s craft, comprising the 
								        basic tools of the trade every writer must have.</p><p> King’s advice is grounded in his vivid
								         memories from childhood through his emergence as a writer, from his struggling early career
								         to his widely reported, near-fatal accident in 1999—and how the inextricable link 
								         between writing and living spurred his recovery.</p> 
								         </td>
								      </tr>
								       <tr>
								        <td><Thumbnail href="https://www.amazon.com/Bird-Some-Instructions-Writing-Life-ebook/dp/B000SEGI8Q/ref=sr_1_1_ha?s=books&ie=UTF8&qid=1402584142&sr=1-1&keywords=bird+by+bird" src="https://smartblogger.com/wp-content/uploads/2014/06/bird-by-bird-anne-lamott.png" /></td>
								        <td>Bird by Bird:Some Instructions on Writing and Life<br /> by Anne Lamott</td>
								        <td>Advice on writing and on life from an acclaimed bestselling author.</td>
								      </tr>
								       <tr>
								        <td><Thumbnail href="https://www.amazon.com/Writing-Down-Bones-Freeing-Shambhala-ebook/dp/B00HEN3K0I/ref=sr_1_2?s=books&ie=UTF8&qid=1402584180&sr=1-2&keywords=writing+down+the+bones" alt="" src="https://smartblogger.com/wp-content/uploads/2014/06/writing-down-the-bones-natalie-goldberg.png" /></td>
								        <td>Writing Down the Bones: Freeing the Writer Within<br /> by Natalie Goldberg</td>
								        <td><p>This thirtieth-anniversary edition includes new forewords by Julia Cameron
								        and Bill Addison. It also includes a new preface in which Goldberg reflects  on the enduring 
								        quality of the teachings here.</p><p> She writes, "What have I learned about writing over these thirty 
								        years? I’ve written fourteen books, and it’s the practice here in Bones that is the foundation, 
								        sustaining and building my writing voice, that keeps me honest, teaches me how to endure the hard
								         times and how to drop below discursive thinking, to taste the real meat of our minds and the life around us."</p></td>
								      </tr>
								       <tr>
								        <td><Thumbnail href="https://www.amazon.com/Blue-Book-Grammar-Punctuation-Easy/dp/1118785568/ref=pd_sim_14_5?_encoding=UTF8&pd_rd_i=1118785568&pd_rd_r=860ZTHEMAJPDY1EBGTA2&pd_rd_w=1H4Mm&pd_rd_wg=F9qFf&psc=1&refRID=860ZTHEMAJPDY1EBGTA2" src="./images/resources-book10.jpg" /></td>
								        <td>The Blue Book of Grammer and Punctuation:<br /> An Easy-to-Use Guide by Jane Straus</td>
								        <td><p>The Blue Book of Grammar and Punctuation is a concise, entertaining 
								        workbook and guide to English grammar, punctuation, and usage.</p>
								        <p>This user-friendly resource includes simple explanations of grammar,
								         punctuation,and usage; scores of helpful examples; dozens of reproducible
								          worksheets; and pre- and post-tests to help teach grammar to students of all
								          ages.</p></td>
								      </tr>
								    </tbody>
								</Table>
						</Col>
					</Row>
				</Grid>
			</div>

		)
	}
}

export default Resources;