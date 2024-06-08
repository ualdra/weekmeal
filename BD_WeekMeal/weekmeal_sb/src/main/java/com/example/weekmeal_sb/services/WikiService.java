package com.example.weekmeal_sb.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

import com.example.weekmeal_sb.dto.WikiDto;

@Component("wikiDataService")


public class WikiService {
    public static String removeReferences(String text) {
        // Regular expression to match references in square brackets
        String pattern = "\\[[0-9]+(?:,[0-9]+)*\\]";
        
        // Compile the pattern
        Pattern compiledPattern = Pattern.compile(pattern);
        
        // Create matcher from the pattern
        Matcher matcher = compiledPattern.matcher(text);
        
        // Replace all matches with an empty string
        String cleanedText = matcher.replaceAll("");
        
        // Remove any extra spaces left after removal of references
        cleanedText = cleanedText.replaceAll("\\s+", " ").trim();
        
        return cleanedText;
    }
    public WikiDto retrieveWikiVegetarianismoData() {
        try {
            Document webPage = Jsoup.connect("https://es.wikipedia.org/wiki/Vegetarianismo")
            .get();
            String wikiData = webPage.getElementById("mw-content-text").select("p").get(0).text();//.getElementsByTag("p").get(0);
            
            //List<Element> rows = tbody.children().subList(2, tbody.children().size());
            WikiDto wikiDto = new WikiDto();
            wikiDto.text = removeReferences(wikiData);
            return wikiDto;

        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public WikiDto retrieveWikiVeganismoData() {

        try {
            Document webPage = Jsoup.connect("https://es.wikipedia.org/wiki/Veganismo")
                    .get();
            String wikiData = webPage.getElementById("mw-content-text").select("p").get(0).text();//.getElementsByTag("p").get(0);


            WikiDto wikiDto = new WikiDto();
            wikiDto.text = removeReferences(wikiData);
            //List<Element> rows = tbody.children().subList(2, tbody.children().size());

            return wikiDto;

        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
    
    public WikiDto retrieveWikiLowFodmapData() {

        try {
            Document webPage = Jsoup.connect("https://es.wikipedia.org/wiki/FODMAP")
                    .get();
            String wikiData = webPage.getElementById("mw-content-text").select("p").get(1).text();//.getElementsByTag("p").get(0);

            //List<Element> rows = tbody.children().subList(2, tbody.children().size());
            WikiDto wikiDto = new WikiDto();
            wikiDto.text = removeReferences(wikiData);
            return wikiDto;


        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public WikiDto retrieveWikiGlutenData() {

        try {
            Document webPage = Jsoup.connect("https://es.wikipedia.org/wiki/Gluten")
                    .get();
            String wikiData = webPage.getElementById("mw-content-text").select("p").get(0).text();//.getElementsByTag("p").get(0);

            //List<Element> rows = tbody.children().subList(2, tbody.children().size());
            WikiDto wikiDto = new WikiDto();
            wikiDto.text = removeReferences(wikiData);
            return wikiDto;


        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public WikiDto retrieveWikiLacteoData() {

        try {
            Document webPage = Jsoup.connect("https://es.wikipedia.org/wiki/Lácteo")
                    .get();
            String wikiData = webPage.getElementById("mw-content-text").select("p").get(0).text();//.getElementsByTag("p").get(0);

            //List<Element> rows = tbody.children().subList(2, tbody.children().size());
            WikiDto wikiDto = new WikiDto();
            wikiDto.text = removeReferences(wikiData);
            return wikiDto;

        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
    public WikiDto retrieveWikiCetogenicoData() {

        try {
            Document webPage = Jsoup.connect("https://es.wikipedia.org/wiki/Dieta_cetog%C3%A9nica")
                    .get();
            String wikiData = webPage.getElementById("mw-content-text").select("p").get(0).text();//.getElementsByTag("p").get(0);

            //List<Element> rows = tbody.children().subList(2, tbody.children().size());
            WikiDto wikiDto = new WikiDto();
            wikiDto.text = removeReferences(wikiData);
            return wikiDto;

        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    private Integer toIntOrNull(String replace) {
        try {
            return Integer.parseInt(replace.replace(",", ""));
        } catch (NumberFormatException e) {
            return null;
        }
    }
}
