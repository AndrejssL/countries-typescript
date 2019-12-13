import React from "react";
import { LoadingSpinner } from "./Spinner";
import { Query } from "react-apollo";
import { client } from "../apollo";
import { Accordion, Card } from "react-bootstrap";
import { Countries } from "./interfaces";
import { GET_COUNTRIES } from "./requests";

export const Country: React.FC = () => {
  return (
    <Query<Countries> query={GET_COUNTRIES} client={client}>
      {({ loading, error, data }) => {
        if (loading || !data) return <LoadingSpinner />;
        if (error)
          return <p>Something went wrong... Please check again later!</p>;
        return (
          <div className="content">
            {data.countries.map(country => (
              <Accordion key={country.code}>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    {country.name}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <div className="inner-content">
                        <p>Country's Code:</p>
                        {country.code}
                        <p>Country's Phone Code:</p>+{country.phone}
                        <p>Country's Native Langugage:</p>
                        {country.native}
                        <p>Country's Currency:</p>
                        {country.currency}
                        <p>Continent, where country is located:</p>
                        {country.continent.name}
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            ))}
          </div>
        );
      }}
    </Query>
  );
};
