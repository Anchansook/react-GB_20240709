import React from 'react'
import './Example2.css';

function TableHeader() {
    return (
        <div className='th'>
            <div className='td'>사번</div>
            <div className='td'>이름</div>
            <div className='td'>출근상태</div>
        </div>
    )
};

interface TableRowProps {
    employeeNumber: string;
    employeeName: string;
    workState: boolean;
};


function TableRow({ employeeNumber, employeeName, workState }: TableRowProps) {

    const color = workState ? 'blue' : 'red';

    return (
        <div className='tr'>
            <div className='td'>{employeeNumber}</div>
            <div className='td'>{employeeName}</div>
            <div className='td' style={{ color }}>●</div> {/* 속성명 = 변수명 : 하나만 써도 됨 */}
        </div>
    )
};

interface TableDataTrProps {
    type: 'tr';
    employeeNumber: string;
    employeeName: string;
    workState: boolean;
}

interface TableDataThProps {
    type: 'th';
}

function TableData(props: TableDataTrProps | TableDataThProps) {
    {/* 이때는 공통된 속성만 가져올 수 있음 */}
    const { type } = props; 

    if (type === 'th') {
        return (
            <div className='th'>
                <div className='td'>사번</div>
                <div className='td'>이름</div>
                <div className='td'>출근상태</div>
            </div>
        )
    } {/* type: th가 나갔기 때문에 다른 속성들 구조분해할당 가능 */}

    const { employeeNumber, employeeName, workState } = props;

    const color = workState ? 'blue' : 'red';

    return (
        <div className='tr'>
            <div className='td'>{employeeNumber}</div>
            <div className='td'>{employeeName}</div>
            <div className='td' style={{ color }}>●</div> {/* 속성명 = 변수명 : 하나만 써도 됨 */}
        </div>
    )
};

export default function Example2() {

    const employee1 = {
        employeeNumber: '202401',
        employeeName: '홍길동',
        workState: false
    };

    const employee2 = {
        employeeNumber: '202402',
        employeeName: '이영희',
        workState: true
    };

    const employee3 = {
        employeeNumber: '202403',
        employeeName: '김철수',
        workState: true
    };
    
    return (
        <div className='table'>
            {/* <TableHeader />
            <TableRow {...employee1} />
            <TableRow {...employee2} />
            <TableRow {...employee3} />  */} 
            {/* workState={true} : true에 한해서 값을 할당 안해줘도 됨(true로 인식) */}

            {/* <TableData type='th' />
            <TableData type='tr' {...employee1} />
            <TableData type='tr' {...employee2} />
            <TableData type='tr' {...employee3} /> */}

            {/* <TableHeader />
            <TableRow {...employees[0]} />
            <TableRow {...employees[1]} />
            <TableRow {...employees[2]} /> */}

            <TableHeader />
            {employees.map((employee, index) => <TableRow key={index} {...employee} />)}
        </div>
    )
}

const employees = [
    {
        employeeNumber: '202401',
        employeeName: '홍길동',
        workState: false
    },
    {
        employeeNumber: '202402',
        employeeName: '이영희',
        workState: true
    },
    {
        employeeNumber: '202403',
        employeeName: '김철수',
        workState: true
    }
];
