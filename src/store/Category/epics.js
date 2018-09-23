import { combineEpics, ofType } from "redux-observable"
import { of } from "rxjs"
import { mergeMap, catchError } from "rxjs/operators"
import { apiUrl } from "../../common/services/globalUrls"
import actionCreators from "./actionCreators"
import { default as ajax } from "../../common/services/utils"

const getCategoriesEpic = actions$ =>
    actions$.pipe(
        ofType(actionCreators.getCategories.type),
        mergeMap(({ payload }) =>
            ajax.get(apiUrl("categories")).pipe(
                mergeMap(({ response }) =>
                    of(actionCreators.updateCategories.create(response))
                ),
                catchError(error => actionCreators.setError.create(error))
            )
        )
    )
export const epics = combineEpics(getCategoriesEpic)
