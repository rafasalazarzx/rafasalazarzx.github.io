import React from 'react';
import StyledHeader from './Header.style';

const Header = () => (
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
                <StyledHeader.LinkedInSocialLink href="https://linkedin.com">
                    LinkedIn
                </StyledHeader.LinkedInSocialLink>
            </StyledHeader.SocialLinksListItem>
            <StyledHeader.SocialLinksListItem>
                <StyledHeader.InstagramSocialLink href="https://linkedin.com">
                    LinkedIn
                </StyledHeader.InstagramSocialLink>
            </StyledHeader.SocialLinksListItem>
            <StyledHeader.SocialLinksListItem>
                <StyledHeader.TwitterSocialLink href="https://linkedin.com">
                    LinkedIn
                </StyledHeader.TwitterSocialLink>
            </StyledHeader.SocialLinksListItem>
            <StyledHeader.SocialLinksListItem>
                <StyledHeader.GithubSocialLink href="https://linkedin.com">
                    LinkedIn
                </StyledHeader.GithubSocialLink>
            </StyledHeader.SocialLinksListItem>
        </StyledHeader.SocialLinksList>
    </div>
);

export default Header;
