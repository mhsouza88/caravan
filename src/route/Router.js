import React from "react"
import { Switch, Route } from "react-router-dom"
import { HomePage } from "../pages/Home/HomePage"
import { SignUpPage } from "../pages/SignUp/SignUpPage"
import { PlansPage } from "../pages/Plans/PlansPage"
import { ContactPage} from "../pages/Contact/ContactPage"
import { CaliforniaPage } from "../pages/Places/CaliforniaPage"
import { ParisPage } from "../pages/Places/ParisPage"
import { DublinPage } from "../pages/Places/DublinPage"
import { ErrorPage } from "../pages/Error/ErrorPage"

export const Router = () => {
    return (
            <Switch>
                <Route exact path={"/"} component={() => <HomePage />}/>
                <Route exact path="/cadastro" component={() => <SignUpPage />} />
                <Route exact path="/planos" component={() => <PlansPage />} />
                <Route exact path="/contato" component={() => <ContactPage />} />
                <Route exact path='/locais/california' component={() => <CaliforniaPage/>}/>
                <Route exact path='/locais/paris' component={() => <ParisPage/>}/>
                <Route exact path="/locais/dublin" component={() => <DublinPage />} />
                <Route path="*" component={() => <ErrorPage />} />
            </Switch>
    )
}

export default Router