import React from 'react';
import * as S from '../../styled-components/TicketListHeader_Styles';
import { SortUpIcon } from './SortUpIcon';
import { SortDownIcon } from './SortDownIcon';

class TicketHeader extends React.Component {
  state = {
    headers: [
      {
        id: 'id',
        text: 'ID',
        filter: 'id',
        order: 'desc',
        active: false
      },
      {
        text: 'Title',
        filter: 'title',
        order: 'desc',
        active: false
      },
      {
        text: 'Date',
        filter: 'created_at',
        order: 'desc',
        active: false
      },
      {
        text: 'Category',
        filter: 'category_id',
        order: 'desc',
        active: false
      },
      {
        text: 'Opened By',
        filter: 'opened_by',
        order: 'desc',
        active: false
      },
      {
        text: 'Assigned To',
        filter: 'assigned_to',
        order: 'desc',
        active: false
      },
      {
        text: 'Status',
        filter: 'closed',
        order: 'desc',
        active: false
      }
    ]
  };

  // on click -->
  sortBy = (filter, i) => {
    const { headers } = this.state;

    this.setState({
      headers: headers.map(header => ({
        ...header,
        active: header.filter === filter,
        order: header.order === 'asc' ? 'desc' : 'asc'
      }))
    });

    this.props.sortBy(filter, this.state.headers[i].order);
  };

  render() {
    const { headers } = this.state;
    return (
      <S.Container>
        {headers.map((header, i) => (
          <div key={i}>
            <span>{header.text}</span>
            <S.SortIcons onClick={() => this.sortBy(header.filter, i)}>
              <SortUpIcon header={header} />
              <SortDownIcon header={header} />
            </S.SortIcons>
          </div>
        ))}
      </S.Container>
    );
  }
}

export default TicketHeader;
