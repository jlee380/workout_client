import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-left: 40px;
`;

export const FilterHeader = styled.div`
    flex: 100%;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 8px;
    padding-bottom: 10px;
`;
export const FilterList = styled.div`
    display: flex;
    flex: 100%;
    flex-direction: row;
`;
export const Filter = styled.div`
    font-size: 16px;
    align-items: center;
    cursor: pointer;
    padding-right: 70px;
    padding-bottom: 20px;

    &:actvie {
        font-weight: bold;
    }
`;
export const CurrentLocation = styled.div`
    flex: 100%;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 8px;
`;
export const GymLocation = styled.div`
    flex: 100%;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    align-items: center;
    padding-bottom: 20px;
`;
