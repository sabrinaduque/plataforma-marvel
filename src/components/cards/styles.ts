import styled from "styled-components"
// import { DEVICE_BREAKPOINTS } from "../../styles"

export const Container = styled.div`
	display: inline-block;
	position: relative;

	.infos {
		p {
			padding-bottom: 20px;
		}
		
		display: flex;
		position: absolute;
		top: 50%;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 20px;
		height: 217px;
		border-radius: 30px;
		background: linear-gradient(180deg, 
		#ff0000 0.00%, 
		rgba(128,0,0,0.3 ) 100.00%);
  }

	&.expanded {
		img {
			position: absolute;
			z-index: 1;
		}

		.infos {
		.description {
			display: none;
		}

		.appears {
			span {
				display: flex;
				height: 274px;
				width: 171px;
			}
		}
		
		display: flex;
		position: relative;
		top: 50%;
		width: 607px;
    padding-left: 304px;
		height: 438px;
		background: linear-gradient(90deg, 
		#ff0000 0.00%, 
		#400e0e 100.00%);
		font-family: "Axiforma";
		font-size: 18px;
		font-weight: bold;
		line-height: 22px;
		font-style: normal;
		text-align: left;
		align-items: flex-start;
  }
	}
`
