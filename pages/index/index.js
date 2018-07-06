import React from 'react'
import * as S from './styles'
import Link from 'next/link'
import posts from '../../data/posts'


export default () => (

  <S.PageWrapper>
    <S.PageInner>
      <S.Disclaimer>Work in Progress 💅🏻</S.Disclaimer>
      <S.DisclaimerSub>Alcuni Link:</S.DisclaimerSub>

        <S.ListGroup>
          <S.ListTitle>I post</S.ListTitle>
          <S.List>
            {
              posts &&
              posts.length > 0 &&
              posts.map(({slug, title, content}) => (
                <Link href={`/post/${slug}`}>
                  <S.ListItem>
                    <S.ListItemHeader>
                      {title}
                    </S.ListItemHeader>
                    <S.ListItemContent>
                      {content}
                    </S.ListItemContent>
                  </S.ListItem>
                </Link>
              ))
            }

          </S.List>
      </S.ListGroup>


      <S.ListGroup>
        <S.ListTitle>Chi sono</S.ListTitle>
        <S.List>
          <Link href="/about">
            <S.ListItem>
              <S.ListItemHeader>
                About
              </S.ListItemHeader>
              <S.ListItemContent>
                Lorem ipsum dolor sit amet
              </S.ListItemContent>
            </S.ListItem>
          </Link>
          <Link href="/carriera">
            <S.ListItem>
              <S.ListItemHeader>
                Others
              </S.ListItemHeader>
              <S.ListItemContent>
                Lorem ipsum dolor sit amet
              </S.ListItemContent>
            </S.ListItem>
          </Link>
        </S.List>
      </S.ListGroup>












      
    </S.PageInner>



  </S.PageWrapper>
)