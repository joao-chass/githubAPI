import React from 'react'
import * as S from "./styled"

function Repositories() {
    return (
        <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>

                <S.WrapperTab>
                    repositorie
                </S.WrapperTab>

                <S.WrapperTab>
                    starred
                </S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>Panel repositories</S.WrapperTabPanel>
            <S.WrapperTabPanel>Panel starreds</S.WrapperTabPanel>

        </S.WrapperTabs>
    )
}

export default Repositories
