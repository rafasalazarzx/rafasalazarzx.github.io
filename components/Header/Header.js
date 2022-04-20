import React from 'react';
import StyledHeader from './Header.style';

function Header() {
    return (
        <div>
            <StyledHeader.Logo viewBox="0 0 160 40">
                <StyledHeader.FirstName x="0" y="18">
                    rafael
                </StyledHeader.FirstName>
                <StyledHeader.LastName x="0" y="35">
                    castro salazar
                </StyledHeader.LastName>
            </StyledHeader.Logo>
            <StyledHeader.SocialLinksList>
                <StyledHeader.SocialLinksListItem>
                    <StyledHeader.LinkedInSocialLink href="https://www.linkedin.com/in/castrosalazar/">
                        LinkedIn
                    </StyledHeader.LinkedInSocialLink>
                </StyledHeader.SocialLinksListItem>
                <StyledHeader.SocialLinksListItem>
                    <StyledHeader.TwitterSocialLink href="https://twitter.com/rafasalazarzx">
                        Twitter
                    </StyledHeader.TwitterSocialLink>
                </StyledHeader.SocialLinksListItem>
                <StyledHeader.SocialLinksListItem>
                    <StyledHeader.GithubSocialLink href="https://github.com/rafasalazarzx">
                        GitHub
                    </StyledHeader.GithubSocialLink>
                </StyledHeader.SocialLinksListItem>
                <StyledHeader.SocialLinksListItem>
                    <StyledHeader.InstagramSocialLink href="https://www.instagram.com/rafasalazarzx/">
                        Instagram
                    </StyledHeader.InstagramSocialLink>
                </StyledHeader.SocialLinksListItem>
            </StyledHeader.SocialLinksList>
        </div>
    );
}

export default Header;
