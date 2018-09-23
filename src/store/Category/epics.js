import { combineEpics } from "redux-observable"
import "rxjs/add/operator/map"
import "rxjs/add/observable/of"
import "rxjs/add/operator/mergeMap"
import { Observable } from "rxjs/Observable"
import { apiUrl } from "../../common/services/globalUrls"
import actionCreators from "./actionCreators"
import { default as ajax } from "../../common/services/utils"

const getCategoriesEpic = actions$ =>
    actions$
        .ofType(actionCreators.getCategories.type)
        .mergeMap(({ payload }) => ajax.get(apiUrl("categories")))
        .map(res => res.response)
        .mergeMap(res =>
            Observable.of(actionCreators.updateCategories.create(res))
        )

export const epics = combineEpics(getCategoriesEpic)
