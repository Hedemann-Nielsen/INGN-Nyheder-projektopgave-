import { useGetQuery } from "../Hooks/useGetQuery";
import { GetAllFooterContent } from "../Queryes/GetAllFooterContent";
import { Link } from "react-router-dom";

export const Footer = () => {
	const { data, isLoading, error } = useGetQuery(
		GetAllFooterContent,
		"allFooterContent"
	);

	if (isLoading) {
		return <span>Loading....</span>;
	}

	if (error) {
		return <span>{error.message}</span>;
	}

	const footer = data.footers[0];
	console.log(footer);

	return (
		<footer className=" grid grid-cols-4 bg-secudary h-[268px] px-[100px] py-[52px] text-base">
			<div>
				<h3 className=" pb-6">Adresse</h3>
				<p>{footer.address.companyName}</p>
				<p>{footer.address.streetAndNumber}</p>
				<p>{footer.address.zipCodeAndCity}</p>
			</div>
			<div>
				<h3 className=" pb-6">Links</h3>

				{footer.links.map((link, index) => (
					<div key={index}>
						<Link to={link.link}>{link.linkName}</Link>
					</div>
				))}
			</div>
			<div>
				<h3 className=" pb-6">Politik</h3>
				{footer.politics.map((politic, index) => (
					<div key={index}>
						<Link to={politic.link}>{politic.linkName}</Link>
					</div>
				))}
			</div>
			<div>
				<h3 className=" pb-6">Kontakt</h3>
				<a href={`mailto:${footer.contacts[0].contactType}`}>
					{footer.contacts[0].contactType}
				</a>
				<a href={`phone:${footer.contacts[1].contactType}`} className="block">
					Telefon: {footer.contacts[1].contactType}
				</a>

				<p>fax: {footer.contacts[2].contactType}</p>
			</div>
		</footer>
	);
};
